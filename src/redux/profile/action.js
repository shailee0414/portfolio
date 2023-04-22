
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProfile = createAsyncThunk("FETCH_PROFILE", async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    "https://portfolio-api-ochre.vercel.app/profile",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

   
    return response;
});
export  default fetchProfile;