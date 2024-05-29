import { AuthKitToken } from "@integrationos/authkit-node";
import { IntegrationOS } from "@integrationos/node"

async function AuthKit() {
  const secretKey = process.env.SECRET_KEY ?? ''
  const authKitToken = new AuthKitToken(secretKey);

  return authKitToken;
}

async function CustomerList() {
  const secretKey = process.env.SECRET_KEY ?? ''
  const integrate = new IntegrationOS(secretKey);

  const response = await integrate
    .customers("test::shopify::deleteme-5-a-2-ee-621-da")
    .list();

  return response
}

const Home = async() => {
  const authkit = await AuthKit()
  const customers = await CustomerList()

  console.log(authkit instanceof AuthKitToken ? 'AuthKitToken object returned' : 'Other object returned')

  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>{/* { JSON.stringify(customers, null, 2) } */}</div>
        <div>customers.unified[0].createdAt: { customers.unified[0].createdAt }</div>
        <div>customers.headers.date: { customers.headers.date }</div>
      </pre>
    </div>
  );
}

export default Home;
