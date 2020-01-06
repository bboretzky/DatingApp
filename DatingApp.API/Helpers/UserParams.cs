namespace DatingApp.API.Helpers
{
    public class UserParams
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
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 99;
        public string OrderBy { get; set; }

    }
}