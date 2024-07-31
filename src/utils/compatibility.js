import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'

/** Mimic CommonJS variables -- not needed if using CommonJS **/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname /** Optional; default: process.cwd() **/,
  resolvePluginsRelativeTo: __dirname /** Optional */,
})

export default compat
