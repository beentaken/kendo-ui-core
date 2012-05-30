namespace Kendo.Mvc.UI.Html
{
    using Infrastructure;

    public interface IGridPagerRefreshBuilder
    {
        IHtmlNode Create(string url, string refreshText);
    }

    class GridPagerRefreshBuilder : IGridPagerRefreshBuilder
    {
        public IHtmlNode Create(string url, string refreshText)
        {
            var div = new HtmlElement("div")
                .AddClass("k-status");

            var a = new HtmlElement("a")
                .AddClass(UIPrimitives.Icon, "k-refresh")
                .Attribute("href", url)
                .Text(refreshText);

            a.AppendTo(div);

            return div;
        }
    }
}