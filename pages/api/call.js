export default async function handler(req, res) {
  console.log({ req });

  return res.json({ revalidated: true });
}
