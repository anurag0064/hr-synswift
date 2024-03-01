const Button =()=>{
    return(
        <>
         <button className="btn btn-dark mt-3 w-100" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
        
        </>
    )
}
export default Button;