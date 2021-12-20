function DemoWindiCSS(props) {
    return (
        <div
            bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
            text="sm white"
            font="mono light"
            p="y-2 x-4"
            border="2 rounded blue-200"
        >
            <span>Hello, {props.name}. &nbsp;</span>
            <button className={'bg-red-500 text-white p-2 rounded'}>Test Windi CSS</button>
        </div>

    )
}

export default DemoWindiCSS;