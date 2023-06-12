            // const heading=React.createElement('h1',{},'Hello world from react')
            const root=ReactDOM.createRoot(document.getElementById('root2'))
            

            
            // <div>
            //     <div>
            //         <h1></h1>
            //         <h1></h1>
            //     </div>

            //     <div>
            //         <h1></h1>
            //         <h1></h1>
            //     </div>
            // </div>

            const outer=React.createElement('div',{},
                [React.createElement('div',{},
                    [React.createElement('h1',{},'inner html'),
                    React.createElement('h1',{},'inner html')
                    ]),
                 React.createElement('div',{},
                 [React.createElement('h1',{},'inner html'),
                 React.createElement('h1',{},'inner html')
                 ])
                ]
            )
            root.render(outer)
            
