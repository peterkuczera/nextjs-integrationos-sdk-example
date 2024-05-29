const { readFileSync } = require('fs')
const { family, version, familySync, GLIBC, MUSL } = require('detect-libc');
const bcrypt = require('bcrypt')
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

const Home = async() => {
  const randomUuid = (await fetch('https://www.uuidtools.com/api/generate/v4', {cache: 'no-store'})).json()
  const detectedFamily = await family()
  const detectedVersion = await version()

  const plaintextPassword = "password"
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(plaintextPassword, salt)
  const filePath = `${__dirname}/../../../..`
  const filesystem = glob(`${filePath}/**`, {dot: true})
    .then (array => array.sort( (a,b) => a.localeCompare(b)))
    .then (array => array.map( item => item + "\n"))



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
        <div>file path: { filePath }</div>
        <div>&nbsp;</div>
        <div>
          <div>files:</div>
          <div>
            {
            filesystem
            }
          </div>
        </div>
      </pre>
    </div>
  );
}

export default Home;
