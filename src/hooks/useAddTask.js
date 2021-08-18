import { useState, useEffect, useContext } from "react";
import fetchAPI from "../helpers/fetch";
import tasksContext from "../context/tasks";

export default function useAddTask(task = "") {
    const [response, setResponse] = useState({});
    const { tasks, setTasks, count, setCount } = useContext(tasksContext);
    const fetch = new fetchAPI();

    useEffect(() => {
        fetch
            .post("https://api-nodejs-todolist.herokuapp.com/task", {
                description: task,
            })
            .then((data) => {
                console.log(data);
                if (data.success) {
                    setTasks([...tasks, data.data]);
                    setCount(count + 1);
                }
                setResponse(data);
            });
    }, []);
    return response;
}