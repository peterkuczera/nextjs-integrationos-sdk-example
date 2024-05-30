import { IntegrationOS } from "@integrationos/node"
import { existsSync } from 'fs';

async function CustomerList() {
  const secretKey = process.env.SECRET_KEY ?? ''
  const integrate = new IntegrationOS(secretKey);

  const response = await integrate
    .customers("test::shopify::deleteme-5-a-2-ee-621-da")
    .list();

  return response
}

const Home = async() => {

  console.log(`current file: ${__filename}`)
  console.log(`/vercel/path0/.next/server/chunks/node.linux-x64-gnu.node exists: ${existsSync('/vercel/path0/.next/server/chunks/node.linux-x64-gnu.node')}`)
  console.log(`/var/task/.next/server/chunks/node.linux-x64-gnu.node exists: ${existsSync('/var/task/.next/server/chunks/node.linux-x64-gnu.node')}`)

  const customers = await CustomerList()
  const randomUuid = (await fetch('https://www.uuidtools.com/api/generate/v4', {cache: 'no-store'})).json()

  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>{/* { JSON.stringify(customers, null, 2) } */}</div>
        <div>customers.unified[0].createdAt: { customers.unified[0].createdAt }</div>
        <div>customers.headers.date: { customers.headers.date }</div>
        <div>randomUuid: { randomUuid }</div>
        <div>&nbsp;</div>
      </pre>
    </div>
  );
}

export default Home;
