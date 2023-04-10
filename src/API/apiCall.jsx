// Once Redux had been implemented this function will provide the functionality to group all the API call functions
// Without Redux it seems that the use and manipulation of the state (across components) in not as straightforward as you would you expect
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