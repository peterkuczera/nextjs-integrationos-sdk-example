import { IntegrationOS } from "@integrationos/node"

async function CustomerList() {
  const secretKey = process.env.SECRET_KEY
  const integrate = new IntegrationOS(secretKey);

  const response = await integrate
    .customers("test::shopify::deleteme-5-a-2-ee-621-da")
    .list();

  return response
}

const Home = async() => {
  const data = await CustomerList()

  return (
    <div>
      <pre>
        {/* { JSON.stringify(data, null, 2) } */}
        { data.unified[0].createdAt }
      </pre>
    </div>
  );
}

export default Home;
