const globals = {
    mainPath: "/artist-website",
    addToMainPath: function(pathPart){
        return `${this.mainPath}/${pathPart}`;
    }
};

export default globals;