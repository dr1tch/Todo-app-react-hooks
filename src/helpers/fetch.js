// const fetchAPI = async(url = "", method = "GET", data = {}) => {
//     let res = "";
//     if (method === "GET" || method === "get") {
//         res = await fetch(url, {
//             method,
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${
//           localStorage.getItem("token") ? localStorage.getItem("token") : ""
//         }`,
//             },
//         });
//     } else {
//         res = await fetch(url, {
//             method,
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${
//           localStorage.getItem("token") ? localStorage.getItem("token") : ""
//         }`,
//             },
//             body: JSON.stringify(data),
//         });
//     }

//     return res.json();
// };

export default class fetchAPI {
    get = async(url = "") => {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
            },
        });
        return res.json();
    };
    post = async(url = "", data = {}) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
            },
            body: JSON.stringify(data),
        });
        return res.json();
    };
    put = async(url = "", data = {}) => {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
            },
            body: JSON.stringify(data),
        });
        return res.json();
    };
    del = async(url = "", data = {}) => {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
            },
            body: JSON.stringify(data),
        });
        return res.json();
    };
}