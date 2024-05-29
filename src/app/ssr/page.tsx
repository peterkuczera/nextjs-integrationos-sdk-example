const { readFileSync } = require('fs')
const { family, version, familySync, GLIBC, MUSL } = require('detect-libc');



const Home = async() => {
  const randomUuid = (await fetch('https://www.uuidtools.com/api/generate/v4', {cache: 'no-store'})).json()
  const detectedFamily = await family()
  const detectedVersion = await version()

  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>randomUuid: { randomUuid }</div>
        <div>&nbsp;</div>
        <div>
          <div>&nbsp;</div>
          <div>detect-libc family(): { detectedFamily }</div>
          <div>detect-libc version(): { detectedVersion }</div>
        </div>
      </pre>
    </div>
  );
}

export default Home;
