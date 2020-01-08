namespace DatingApp.API.Helpers
{
    public class MessageParams
    {
        private const int MAXPAGESIZE = 50;
        private int _pageSize = 10;
        public int Pagenumber { get; set; } = 1;
        public int PageSize
        {
            get { return _pageSize; }
            set { _pageSize = (value > MAXPAGESIZE) ? MAXPAGESIZE : value; }
        }

        public int UserId { get; set; }

        public string MessageContainer { get; set; } = "Unread";
    }
}