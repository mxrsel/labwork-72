import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar.tsx";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
         <header>
             <Toolbar />
         </header>

            <main>
                {children}
            </main>

        </>
    );
};

export default Layout;