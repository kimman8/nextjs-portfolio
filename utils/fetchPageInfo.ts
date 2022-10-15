import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const res = await fetch(
        `/api/getPageInfo`
        );
    //  check res for error
    if (!res.ok) {
        console.log(res.statusText);
    }
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
};