const base_url = 'https://randomuser.me/api';

const createUrl = (url: string): string => `${base_url}${(url.charAt(0) === "?") ? '' : '/' }${url}`;

const GET_All_USERS = createUrl(`?results=`);

export {base_url, 
        GET_All_USERS
};