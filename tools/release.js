import 'dotenv/config'
import release from 'release-it'

console.log(process.env)

const output = await release()

console.log(output)
