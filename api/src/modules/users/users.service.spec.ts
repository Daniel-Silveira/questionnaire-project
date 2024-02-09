import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

const userModelMock = {
  create: jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}

interface UserData {
  id: number
  name: string
  email: string
  password: string
}

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'USERS_REPOSITORY',
          useValue: userModelMock,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      }

      const expectedUser: UserData = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      }

      userModelMock.create.mockResolvedValueOnce(expectedUser)

      const result = await service.create(createUserDto)

      expect(result).toEqual({ user: expectedUser })
      expect(userModelMock.create).toHaveBeenCalledWith(createUserDto)
    })
  })

  describe('findAll', () => {
    it('should return a list of users', async () => {
      const expectedUsers: UserData[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
      ]

      userModelMock.findAll.mockResolvedValueOnce(expectedUsers)

      const result = await service.findAll()

      expect(result).toEqual({ users: expectedUsers })
      expect(userModelMock.findAll).toHaveBeenCalled()
    })
  })

  describe('findOneById', () => {
    it('should return a user by id', async () => {
      const userId = 1
      const expectedUser: UserData = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      }

      userModelMock.findByPk.mockResolvedValueOnce(expectedUser)

      const result = await service.findOneById(userId)

      expect(result).toEqual({ user: expectedUser })
      expect(userModelMock.findByPk).toHaveBeenCalledWith(userId)
    })
  })

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {
      const userEmail = 'john@example.com'
      const expectedUser: UserData = {
        id: 1,
        name: 'John Doe',
        email: userEmail,
        password: 'password123',
      }

      userModelMock.findOne.mockResolvedValueOnce(expectedUser)

      const result = await service.findOneByEmail(userEmail)

      expect(result).toEqual({ user: expectedUser })
      expect(userModelMock.findOne).toHaveBeenCalledWith({ where: { email: userEmail } })
    })
  })

  describe('update', () => {
    it('should update a user by id', async () => {
      const userId = 1
      const updateUserDto = {
        name: 'Updated Name',
        email: 'updated@example.com',
        password: 'updatedpassword',
      }

      const updatedUser: UserData = { id: userId, ...updateUserDto }

      userModelMock.update.mockResolvedValueOnce([1, [updatedUser]])

      const result = await service.update(userId, updateUserDto)

      expect(result).toEqual({ user: [1, [updatedUser]] })
      expect(userModelMock.update).toHaveBeenCalledWith(updateUserDto, {
        where: { id: userId },
        returning: true,
      })
    })
  })

  describe('remove', () => {
    it('should remove a user by id', async () => {
      const userId = 1

      userModelMock.destroy.mockResolvedValueOnce(1)

      const result = await service.remove(userId)

      expect(result).toEqual(1)
      expect(userModelMock.destroy).toHaveBeenCalledWith({ where: { id: userId } })
    })
  })
})
