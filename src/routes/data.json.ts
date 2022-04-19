
/** @type {import('./data.json').RequestHandler} */
export async function get({  }) {
  const item = 'test';
 
  if (item) {
    return {
      body: { item }
    };
  }
 
  return {
    status: 404
  };
}