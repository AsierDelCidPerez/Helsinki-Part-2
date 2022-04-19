const obj = {
    name : {
       firstName : "Arthur",
       lastName : "Edward" 
    },
    salute : function() {
        console.log(this.name.firstName);
    }
}

obj.salute();