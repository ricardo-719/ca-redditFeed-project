export const fetchPostData = async(subReddit) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        
        return jsonResponse.data.children.map((post) => post.data);
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
}