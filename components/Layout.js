function Layout({children}) {
    return (
        <div>
            <nav className="bg-blue-200 ">
                   <h1 className="p-5 font-bold text-center text-4xl">
                        Nちゃんねる風掲示板
                   </h1>
                        
            </nav>
            <main className="container mx-auto">
                <br/>
                {children}
            </main>
        </div>
    );
}

export default Layout;