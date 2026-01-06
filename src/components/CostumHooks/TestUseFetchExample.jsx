import useFetch from "./useFetch";

const TestingCostumHook = () => {
const data = useFetch("https://jsonplaceholder.typicode.com/users");


    return (
        <>
        <h1>Testing UseFetch As a useful Costum Hook</h1>
            {data.map((res) => {
                return (
                <h4 key={res.id}> 
                    {res.id} . {res.name}
                </h4>
                )
            })};
        </>
    )
}

export default TestingCostumHook