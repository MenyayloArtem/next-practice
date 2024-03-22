// icon:file-add | Ant Design Icons https://ant.design/components/icon/ | Ant Design
import * as React from "react";

function AddFile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...props}
    >
      <path d="M480 580H372a8 8 0 00-8 8v48a8 8 0 008 8h108v108a8 8 0 008 8h48a8 8 0 008-8V644h108a8 8 0 008-8v-48a8 8 0 00-8-8H544V472a8 8 0 00-8-8h-48a8 8 0 00-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" />
    </svg>
  );
}

export default AddFile;
