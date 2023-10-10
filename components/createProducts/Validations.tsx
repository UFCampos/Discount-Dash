
const Validation = (input) =>{
    let errors = {}
    
    if (!input.name){
        errors.name = "Name is necessary"
    };
    if (!input.brand){
        errors.brand = "Brand is necessary"
    }
}

export default Validation