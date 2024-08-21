using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace Aspnet.React;

public static class DbSetExtension
{
    public static async Task<T> GetOrCreate<T>(this DbSet<T> dbSet, Expression<Func<T, bool>> predicate, T defaultItem) where T : class
    {
        T item = await dbSet.FirstOrDefaultAsync(predicate);

        if (item == null)
        {
            item = defaultItem;
            dbSet.Add(item);
        }

        return item;
    }
}