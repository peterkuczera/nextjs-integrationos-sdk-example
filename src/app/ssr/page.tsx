const { existsSync } = require('fs')
const { family, version } = require('detect-libc');
const bcrypt = require('bcrypt')
import { glob } from 'glob'

const Home = async() => {
  const randomUuid = (await fetch('https://www.uuidtools.com/api/generate/v4', {cache: 'no-store'})).json()
  const detectedFamily = await family()
  const detectedVersion = await version()

  const plaintextPassword = "password"
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(plaintextPassword, salt)

  const relativePath = `${__dirname}/../../../..`
  const relativeFiles = glob(`${relativePath}/**`, {dot: true})
    .then (array => array.sort( (a,b) => a.localeCompare(b)))
    .then (array => array.map( item => item + "\n"))

  const slashVercelPath = '/vercel/path0'
  let slashVercelFiles = null
  if (existsSync(slashVercelPath)) {
    slashVercelFiles = glob(`${slashVercelPath}/**`, {dot: true})
      .then (array => array.sort( (a,b) => a.localeCompare(b)))
      .then (array => array.map( item => item + "\n"))
  }

  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>randomUuid: { randomUuid }</div>
        <div>&nbsp;</div>
        <div>
          <div>detect-libc family(): { detectedFamily }</div>
          <div>detect-libc version(): { detectedVersion }</div>
        </div>
        <div>bcrypt hashed password: { hashedPassword }</div>
        <div>&nbsp;</div>
        <div>Directory listing of { relativePath }:</div>
        <div>{ relativeFiles }</div>
        <div>&nbsp;</div>
        <div>Directory listing of { slashVercelPath }:</div>
        <div>{ slashVercelFiles !== null ? slashVercelFiles : '' }</div>
      </pre>
    </div>
  );
}

export default Home;
