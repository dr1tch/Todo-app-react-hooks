const Container = ({children}) => {
    return (
        <main className='container mx-auto flex flex-row justify-start items-center'>
            {children}
        </main>
    )
}

export default Container;