import "./styles.css";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Folder from "./components/Folder/Folder";

export default function App() {
  return (
    <div>
      <div className="header">
        <Breadcrumbs className="breadcrumbs" inputItems={["folder1", "folder2", "file1.txt" ]} />
      </div>
      <div className="body">
        <Folder className="folder" />
      </div>
    </div>
  );
}
