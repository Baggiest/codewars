def find_the_crossing(a, b, c, d):
    slopeA = b[1] - a[1]
    slopeB = d[1] - c[1]
    
    if slopeA == slopeB:
        print("Lines are parallel")
        return -1
    
    print(slopeA, slopeB)


find_the_crossing((0, 0), (4, 4), (0, 4), (4, 0))
find_the_crossing((1, 1), (2, 1), (1, 2), (3,2))