import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function useTheme() {
  // The system theme is used only if nothing is saved yet
  const [theme, setTheme] = useLocalStorage('theme', getSystemTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme