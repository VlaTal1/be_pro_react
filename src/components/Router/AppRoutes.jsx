import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Workspace} from "../../pages/Workspace/Workspace";
import {Registration} from "../../pages/Registration/Registration";

export const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/workspace/:workspaceId/:boardId" element={<Workspace/>}/>
        <Route path="/registration" element={<Registration/>}/>
    </Routes>
)
