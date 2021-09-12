import React from 'react';
import { Editor } from "@tinymce/tinymce-react";


export const EditorMCE = (props, ref) => {
    return(
        <Editor
            apiKey="ocwfrseo4ye5aze2n7y9tm6psng8aekall5w2s1vsrbrjz6n"
            plugins="wordcount"
            {...props}
        />
    )
};