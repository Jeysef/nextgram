import Page from "../../page";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Page />
            {props.children}
        </>
    )
}