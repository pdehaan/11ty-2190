module.exports = eleventyConfig => {
    eleventyConfig.addFilter("inspect", require("node:util").inspect);

    return {
        dir: {
            input: "src",
            output: "www",
        }
    };
};
