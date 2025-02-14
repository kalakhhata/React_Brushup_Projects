import MenuList from "./menu-list";

export default function TreeMenu({ menus = [] }) {
  return (
    <>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
}
