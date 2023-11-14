import React from 'react';
import './Templates.css'
import {TemplateBlock} from "../TemplateBlock/TemplateBlock";

export const Templates = ({title, templates}) => {
    return (
        <div className="templates">
            <div className="templates-title">{title}</div>
            <div className="templates-content">
                {templates.map((template) => (
                    <TemplateBlock template={template} />
                ))}
            </div>
        </div>
    );
};