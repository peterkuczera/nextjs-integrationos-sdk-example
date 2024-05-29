const { readFileSync } = require('fs')
const { family, familySync, GLIBC, MUSL } = require('detect-libc');


// function isMusl() {
//   // For Node 10
//   if (!process.report || typeof process.report.getReport !== 'function') {
//     try {
//       const lddPath = require('child_process').execSync('which ldd').toString().trim()
//       return readFileSync(lddPath, 'utf8').includes('musl')
//     } catch (e) {
//       return true
//     }
//   } else {
//     const glibcVersionRuntime = process.report.getReport().header
//     return !glibcVersionRuntime
//   }
// }

const Home = async() => {
  const randomUuid = (await fetch('https://www.uuidtools.com/api/generate/v4', {cache: 'no-store'})).json()
  const detectedFamily = await family()

  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>randomUuid: { randomUuid }</div>
        <div>&nbsp;</div>
        <div>
          {/* <div>isMusl(): { isMusl() ? 'true' : 'false' }</div> */}
          <div>&nbsp;</div>
          <div>detect-libc family(): { detectedFamily }</div>
        </div>
      </pre>
    </div>
  );
}

export default Home;
