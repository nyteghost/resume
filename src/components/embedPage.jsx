import ReactEmbedGist from 'react-embed-gist';
const  embedPaged = (HTML) => {
    let html_src = `nyteghost/${HTML}`;
    return (
        <ReactEmbedGist gist={html_src}
                        wrapperClass="gist__bash"
                        loadingClass="loading__screen"
                        titleClass="gist__title"
                        file=".bash_profile.sh"/>
    )
}
export default embedPaged;