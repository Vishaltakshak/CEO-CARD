const CommunityApi = async (categoryId) => {
  let communityData = []
  const url = "https://admin.speedsoftware.site/Api/getCommunities";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify({ categoryId }),
  })
    .then((response) => response.json())
    .then((result) => (communityData = result));

  return communityData;
};

export default CommunityApi;
