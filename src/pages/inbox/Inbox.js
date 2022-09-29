import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@mui/icons-material";
import { Refresh } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { StarBorderOutlined } from "@mui/icons-material";

function Inbox() {
  let navigate = useNavigate();
  const pathPage = "/mail"; //contoh

  return (
    <div className="flex-1 w-full">
      <div
        className="sticky 
      top-0 
      flex 
      justify-between 
      border-b 
      border-solid 
      border-gray-400
      bg-white
      z-999
      pr-10"
      >
        <div>
          <Checkbox />

          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div>
        {/* emailRow */}
        <div
          onClick={() => navigate(pathPage, { replace: true })}
          className="flex w-full items-center h-12.5 border-b border-solid border-gray-400 cursor-pointer z-999"
        >
          <div className="flex-none w-15">
            <Checkbox />
            <IconButton>
                 <StarBorderOutlined /> 
                 </IconButton>
          </div>
          <h3 className="flex-initial w-15">Website Artaka</h3>
          <div className="flex-initial max-w-3xl items-center text-xs">
            <h4 className="w-100 whitespace-nowrap text-ellipsis overflow-hidden px-5">
              Follow me!!
              <span className="font-normal text-gray-700">
                Click the following button to follow me.
              </span>
            </h4>
          </div>
          <p className="pr-15 text-xs font-bold">9am</p>
        </div>

        <div
          onClick={() => navigate(pathPage, { replace: true })}
          className="flex items-center h-12.5 border-b border-solid border-gray-400 cursor-pointer z-999"
        >
          <div className="flex-none w-15">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined /> 
            </IconButton>
          </div>
          <h3 className="flex-initial w-15">Website Artaka</h3>
          <div className="flex-initial max-w-3xl items-center text-xs">
            <h4 className="w-100 whitespace-nowrap text-ellipsis overflow-hidden px-5">
              Follow me!!
              <span className="font-normal text-gray-700">
                Click the following button to follow me.
              </span>
            </h4>
          </div>
          <p className="pr-15 text-xs font-bold">9am</p>
        </div>

        <div
          onClick={() => navigate(pathPage, { replace: true })}
          className="flex items-center h-12.5 border-b border-solid border-gray-400 cursor-pointer z-999"
        >
          <div className="flex-none w-15">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined /> 
            </IconButton>
          </div>
          <h3 className="flex-initial w-15">Website Artaka</h3>
          <div className="flex-initial max-w-3xl items-center text-xs">
            <h4 className="w-100 whitespace-nowrap text-ellipsis overflow-hidden px-5">
              Follow me!!
              <span className="font-normal text-gray-700">
                Click the following button to follow me.
              </span>
            </h4>
          </div>
          <p className="pr-15 text-xs font-bold">9am</p>
        </div>

        <div
          onClick={() => navigate(pathPage, { replace: true })}
          className="flex items-center h-12.5 border-b border-solid border-gray-400 cursor-pointer z-999"
        >
          <div className="flex">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined /> 
            </IconButton>
          </div>
          <h3>Website Artaka</h3>
          <div className="flex flex-none items-center text-xs">
            <h4 className="w-100 whitespace-nowrap text-ellipsis overflow-hidden px-5">
              Follow me!!
              <span className="font-normal text-gray-700">
                Click the following button to follow me.
              </span>
            </h4>
          </div>
          <p className="pr-15 text-xs font-bold">9am</p>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
