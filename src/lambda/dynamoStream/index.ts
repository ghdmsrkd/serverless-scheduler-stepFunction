exports.handler = async (event: any, context: any, callback: any) => {
  console.log(JSON.stringify(event));

  try {
    return true;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
