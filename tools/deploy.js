import 'dotenv/config'
import { execSync } from 'node:child_process'

execSync(`npx netlify deploy --prod --dir=target --auth="${process.env.NETLIFY_ACCESS_TOKEN}" --site=${process.env.NETLIFY_SITE}`, {
  stdio: 'inherit'
})
