import React from "react";
import Cookies from "js-cookie";



function AdminProgress() {
    var user;
    if (!Cookies.get('userCookie')) {
        window.location.replace('/login?redirectLocation=userprogress');
      } else {
        user = JSON.parse(Cookies.get('userCookie'));
    return (
        <div className="h-full w-full flex justify-center">
            <div className="flex-col w-10/12">
                Hello
            </div>
        </div>
    );
    }
}

export default AdminProgress;