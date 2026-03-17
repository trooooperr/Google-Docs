import { Toolbar } from "./toolbar";
import { Editor } from "./editor";
// interface PageProps {
// params: Promise <{ id: string }>;
// }
const DocumentsPage = () => {
    // const { id } = await params;
    return <div className="min-h-screen bg-[#FAFBFD]">
        <Toolbar/>
        <Editor />
    </div>
    ;
}

export default DocumentsPage
