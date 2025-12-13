module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
