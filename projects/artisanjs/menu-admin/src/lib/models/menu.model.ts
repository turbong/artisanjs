export interface MenuModel {
    id: string;
    class?: string;
    value?: string;
    title: string;
    multiOption: boolean;
    children?: MenuModel[];
    isOpen: boolean;
    url?: string;
    exact: boolean;
    permission?: string;
}
